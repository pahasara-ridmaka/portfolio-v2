// app/api/github-contributions/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const username = "pahasara-ridmaka"; 
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'GitHub token missing from .env.local' }, { status: 500 });
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                weekday
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'NextJS-Contribution-Heatmap' 
      },
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 3600 } 
    });

    // Check if GitHub returned an error status code before attempting to parse JSON
    if (!response.ok) {
      const textError = await response.text();
      return NextResponse.json({ 
        error: `GitHub returned status ${response.status}`, 
        htmlSnippet: textError.slice(0, 200) // Returns the error context safely
      }, { status: response.status });
    }

    const json = await response.json();
    
    if (json.errors) {
      return NextResponse.json({ error: 'GitHub API internal error', details: json.errors }, { status: 500 });
    }
    
    const weeks = json.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
    return NextResponse.json(weeks);

  } catch (error: any) {
    return NextResponse.json(
      { 
        error: 'Failed to fetch GitHub data', 
        details: error?.message || String(error) 
      }, 
      { status: 500 }
    );
  }
}

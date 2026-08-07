"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { slideUp } from "@/lib/animations"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function NavigationMenuDemo() {
  return (
    <motion.div variants={slideUp} initial="hidden" animate="visible">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} transition-transform duration-200 hover:scale-110 active:scale-95`}
              render={<a href="https://github.com/pahasara-ridmaka" target="_blank" rel="noopener noreferrer"><FaGithub/></a>}
            />
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} transition-transform duration-200 hover:scale-110 active:scale-95`}
              render={<a href="https://www.linkedin.com/in/pahasara-ridmaka" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>}
            />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} transition-all duration-200 hover:scale-105 active:scale-95`}
              render={<Link href="/projects">Projects</Link>}
            />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} transition-all duration-200 hover:scale-105 active:scale-95`}
              render={<Link href="/about">About</Link>}
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </motion.div>
  )
}


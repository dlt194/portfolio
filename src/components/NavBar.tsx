import * as React from "react";

import { cn } from "@/lib/utils";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Certificate Tool",
    href: "/cert-tool",
    description:
      "A Rust based tool created to streamline team productivity. Allows generation of Custom OpenSSL Configuration File, CSR Generation, P12/PFX Creation from Certificates.",
  },
  {
    title: "Chat App",
    href: "/chat-app",
    description:
      "Chatbot Widget created in React for integration into Avaya Experience Platform.",
  },
  {
    title: "Thorpe-le-Soken Bowling club",
    href: "/thorpe",
    description: "Basic website created for Thorpe-le-Soken Bowling Club. ",
  },
  {
    title: "Walsh/Thomas Wedding",
    href: "/wedding",
    description:
      "Website created for my own wedding allowing information to be conveyed easily and acting as a platform for RSVP's",
  },
  {
    title: "WebRTC Client",
    href: "/webrtc",
    description: "A custom WebRTC Client for use with Avaya IP Office",
  },
];

export default function NavBar() {
  return (
    <NavigationMenu>
      <div className="flex flex-row items-center justify-between w-full">
        {/* Left-aligned "Dan Thomas" */}
        <NavigationMenuList className="flex">
          <NavigationMenuItem className="text-lg font-bold">
            Dan Thomas
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Right-aligned navigation items */}
        <NavigationMenuList className="flex ml-auto space-x-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dan-thomas-2b338b79/"
              className="inline-block"
            >
              <LinkedInLogoIcon />
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

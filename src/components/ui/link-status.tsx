
import * as React from "react"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { CircleCheck, CircleX, ExternalLink } from "lucide-react"
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { buttonVariants } from "@/components/ui/button"

interface LinkStatusProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  external?: boolean
  isActive?: boolean
  activeRoute?: string
  tooltip?: string
  showStatus?: boolean
}

/**
 * LinkStatus - Component for links with visual status indicators
 * - Working links have a green check icon
 * - Dummy links have a red x icon
 * - Use the `isActive` prop to control the link status
 */
export const LinkStatus = React.forwardRef<HTMLAnchorElement, LinkStatusProps>(
  ({ 
    href, 
    children, 
    className, 
    variant = "default", 
    size = "default", 
    external = false,
    isActive = false, 
    activeRoute,
    tooltip,
    showStatus = true,
    ...props 
  }, ref) => {
    // Check if the current route matches the activeRoute prop
    const isCurrentRoute = activeRoute ? window.location.pathname === activeRoute : false
    const isWorkingLink = isActive || isCurrentRoute || href === "/" || href.startsWith("/ai-")
    
    const linkContent = (
      <div className="flex items-center gap-2">
        {children}
        {external && <ExternalLink className="h-4 w-4 opacity-70" />}
        {showStatus && (
          isWorkingLink ? (
            <CircleCheck className="h-4 w-4 text-green-500" />
          ) : (
            <CircleX className="h-4 w-4 text-red-500" />
          )
        )}
      </div>
    )

    const linkElement = external ? (
      <a
        ref={ref}
        href={href}
        className={cn(
          buttonVariants({ variant, size }),
          !isWorkingLink && "opacity-70 cursor-not-allowed",
          className
        )}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {linkContent}
      </a>
    ) : (
      <Link
        to={isWorkingLink ? href : "#"}
        className={cn(
          buttonVariants({ variant, size }),
          !isWorkingLink && "opacity-70 cursor-not-allowed",
          className
        )}
        onClick={(e) => !isWorkingLink && e.preventDefault()}
        {...props}
      >
        {linkContent}
      </Link>
    )

    if (tooltip) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            {linkElement}
          </TooltipTrigger>
          <TooltipContent>
            {tooltip || (isWorkingLink ? "This link is functional" : "This is a dummy link")}
          </TooltipContent>
        </Tooltip>
      )
    }

    return linkElement
  }
)

LinkStatus.displayName = "LinkStatus"

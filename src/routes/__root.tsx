import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "raZ8y9X_en1M-Mizo8p4kJ9WfbFcd5kaXCzLYneMbHk" },
      { title: "NELSIO — Built to endure. Engineered to scale." },
      { name: "description", content: "NELSIO is the parent company behind CUTZO, IBZEN, and emerging technology initiatives — building software platforms and educational programs designed for long-term impact." },
      { name: "keywords", content: "NELSIO, CUTZO, IBZEN, Mohammed Nadeem, Pavan UG, software platforms, technology incubator, parent company, startups India, engineering standard" },
      { name: "author", content: "NELSIO" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "NELSIO — Built to endure. Engineered to scale." },
      { property: "og:description", content: "An institution of enduring purpose. Parent company behind CUTZO, IBZEN, and emerging technology initiatives." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://nelsio.com" },
      { property: "og:site_name", content: "NELSIO" },
      { property: "og:image", content: "https://nelsio.com/nelsio-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "NELSIO" },
      { name: "twitter:description", content: "Parent company behind CUTZO, IBZEN, and emerging technology initiatives." },
      { name: "twitter:image", content: "https://nelsio.com/nelsio-logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://nelsio.com" },
      { rel: "icon", type: "image/png", href: "/nelsio-logo.png" },
      { rel: "shortcut icon", type: "image/png", href: "/nelsio-logo.png" },
      { rel: "apple-touch-icon", href: "/nelsio-logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NELSIO",
    url: "https://nelsio.com",
    logo: "https://nelsio.com/nelsio-logo.png",
    description: "NELSIO is the parent company behind CUTZO, IBZEN, and emerging technology initiatives.",
    founder: [
      {
        "@type": "Person",
        name: "Mohammed Nadeem",
        jobTitle": "Co-Founder",
      },
      {
        "@type": "Person",
        name: "Pavan UG",
        jobTitle": "Co-Founder",
      },
    ],
    subOrganization: [
      {
        "@type": "Organization",
        name: "CUTZO",
        description: "Smart appointments and queue management for salons.",
      },
      {
        "@type": "Organization",
        name: "IBZEN",
        description: "Youth Innovation & Career Education.",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NELSIO",
    url: "https://nelsio.com",
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

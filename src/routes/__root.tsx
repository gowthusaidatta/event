import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/lib/language-context";
import { MusicProvider } from "@/components/site/MusicProvider";
import { SiteHeader } from "@/components/site/SiteHeader";

import appCss from "../styles.css?url";

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

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Half Saree Ceremony Invitation — కోణాల వేడుక" },
      {
        name: "description",
        content:
          "A premium traditional Telugu Half Saree (Langa Voni) ceremony invitation — design, edit, and share elegant bilingual invites.",
      },
      { property: "og:title", content: "Half Saree Ceremony Invitation — కోణాల వేడుక" },
      {
        property: "og:description",
        content:
          "Design and share a beautiful traditional Telugu Half Saree ceremony invitation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Half Saree Ceremony Invitation — కోణాల వేడుక" },
      { name: "description", content: "A web app for creating elegant, traditional Telugu Half Saree ceremony invitations." },
      { property: "og:description", content: "A web app for creating elegant, traditional Telugu Half Saree ceremony invitations." },
      { name: "twitter:description", content: "A web app for creating elegant, traditional Telugu Half Saree ceremony invitations." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/efbdd529-a39e-44d4-85e8-1d600fb7a0d8/id-preview-f41bb030--96cef614-469b-49be-807e-16cbfadb622e.lovable.app-1777123285251.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/efbdd529-a39e-44d4-85e8-1d600fb7a0d8/id-preview-f41bb030--96cef614-469b-49be-807e-16cbfadb622e.lovable.app-1777123285251.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+Telugu:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Poppins:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Tiro+Telugu&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LanguageProvider>
      <MusicProvider>
        <Toaster richColors position="top-center" />
        <SiteHeader />
        <Outlet />
      </MusicProvider>
    </LanguageProvider>
  );
}

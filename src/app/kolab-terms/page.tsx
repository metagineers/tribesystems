import { redirect } from "next/navigation";

// Legacy draft URL: keep a route for bookmarks while the terms live under
// the per-app, per-jurisdiction terms directory.
export default function KolabTermsRedirect() {
  redirect("/terms/kolab/uk");
}

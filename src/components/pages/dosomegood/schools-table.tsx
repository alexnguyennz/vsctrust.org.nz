import type { CollectionEntry } from "astro:content";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function SchoolsTable({
  schools,
}: {
  schools: CollectionEntry<"dosomegoodSchools">[];
}) {
  return (
    <Table>
      <TableHeader className={"sticky top-0 z-50 bg-white"}>
        <TableRow className={"bg-slate-800 text-white"}>
          <TableHead>School</TableHead>
          <TableHead>Tamariki (children)</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-right">Partner Date</TableHead>
          <TableHead>Sponsored by</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {schools.map((school) => (
          <TableRow key={school.data.name}>
            <TableCell className="font-medium">
              <a
                href={school.data.website}
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                {school.data.name}
              </a>
            </TableCell>
            <TableCell>{school.data.tamariki}</TableCell>
            <TableCell>{school.data.location}</TableCell>
            <TableCell className="text-right">
              {school.data.partnerDate}
            </TableCell>
            <TableCell>
              {school.data.sponsorImage && school.data.sponsorUrl && (
                <a
                  href={school.data.sponsorUrl}
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  className="inline-block"
                >
                  <img
                    src={school.data.sponsorImage.src}
                    width="128"
                    height="128"
                    alt="sponsor logo"
                  />
                </a>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

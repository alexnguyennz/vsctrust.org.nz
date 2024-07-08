import type { CollectionEntry } from "astro:content";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
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
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="w-[200px]">Tamariki (children)</TableHead>
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
            {/* <div className="mt-auto text-center">
                  <a
                      href={school.data.sponsorUrl}
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                      className="inline-block"
                  >
                      <Image
                          src={school.data.sponsorImage}
                          width="128"
                          height="128"
                          alt="sponsor logo"
                          class="object-contain"
                      />
                  </a>
              </div>*/}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total Schools</TableCell>
          <TableCell className="text-right">{schools.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

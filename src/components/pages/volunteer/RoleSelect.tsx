import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function RoleSelect() {
  return (
    <>
      <Select name="role" required>
        <SelectTrigger id="role" name="role" className="shadow-border">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Do Some Good">Do Some Good</SelectItem>
          <SelectItem value="Take 10">Take 10</SelectItem>
          <SelectItem value="Take 10 Arvo's">Take 10 Arvo's</SelectItem>
          <SelectItem value="Gen Link">Gen Link</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}

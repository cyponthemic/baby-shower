import { writeFileSync } from 'fs';
import { join } from 'path';
import { EVENT } from '../src/constants';

/**
 * Escapes special characters in ICS field values
 */
function escapeICSValue(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

/**
 * Generates an ICS (iCalendar) file from the EVENT constants
 */
function generateICS() {
  const { date, title, tagline, location } = EVENT;
  
  // Generate UID based on event date and title
  const uid = `${title.toLowerCase().replace(/\s+/g, '-')}-${date.startTime}@example.com`;
  
  // Generate DTSTAMP (current date/time in UTC)
  const now = new Date();
  const dtstamp = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
  // Escape values that need escaping
  const escapedTitle = escapeICSValue(title);
  const escapedTagline = escapeICSValue(tagline);
  const escapedLocation = escapeICSValue(location);
  
  // Format the ICS content (ICS files use CRLF line endings)
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:-//${escapedTitle}//EN`,
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `SUMMARY:${escapedTitle}`,
    `DESCRIPTION:${escapedTagline}`,
    `LOCATION:${escapedLocation}`,
    `DTSTART:${date.startTime}`,
    `DTEND:${date.endTime}`,
    'END:VEVENT',
    'END:VCALENDAR',
    '' // Empty line at end
  ].join('\r\n');

  // Write to public directory
  const outputPath = join(process.cwd(), 'public', 'baby-shower.ics');
  writeFileSync(outputPath, icsContent, 'utf-8');
  
  console.log(`✅ ICS file generated successfully at: ${outputPath}`);
  console.log(`   Event: ${title}`);
  console.log(`   Date: ${date.day} ${date.dayNumber} ${date.month} ${date.year}`);
  console.log(`   Time: ${date.time}`);
  console.log(`   Location: ${location}`);
}

generateICS();


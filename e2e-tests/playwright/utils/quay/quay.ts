export class ImageRegistry {
  static getAllCellsIdentifier() {
    //create a regex to verify if the string contains pr on it

    const tagText = /pr/i;
    const lastModifiedDate = new RegExp(
      /^[A-Za-z]{3} \d{1,2}, \d{4}, \d{1,2}:\d{2} (AM|PM)$/,
    );
    const size = /(GB|MB)/;
    const expires =
      '^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \\d{1,2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \\d{4} \\d{1,2}:\\d{2}:\\d{2} [\\+\\-]\\d{4}$';
    const expiresRegex = new RegExp(expires);
    const manifest = /sha256/;
    return [tagText, lastModifiedDate, size, expiresRegex, manifest];
  }

  static getAllGridColumnsText() {
    return [
      'Tag',
      'Last Modified',
      'Security Scan',
      'Size',
      'Expires',
      'Manifest',
    ];
  }
}

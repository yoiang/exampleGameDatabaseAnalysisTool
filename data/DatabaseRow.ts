import { DatabaseRow, parseDispositionOrNull, parseMessagingOrNull, parseMotivationOrNull, parseScopeOrNull, parseTechnologyOrNull, parseTimelineOrNull } from "../models/DatabaseRow";
import { parseNumberList, parseNumberWithLetterScale, parseStringList } from '../utility/parse'

export const googleSheetsRawAdapter = (sheetsData: any[][]): DatabaseRow[] => {
  // TODO: programatically get Sheet Header information
  const sheetsDataMinusHeader = [...sheetsData]
  // TODO: connect header name with field below rather than hardcode order?
  sheetsDataMinusHeader.splice(0, 2)
  
  return sheetsDataMinusHeader
    // TODO: is there a Typescript way to annotate the field order in a list and use it to assign below?
    .map((row) => ({
        title: row[0] || null,
        developer: row[1] || null,
        year: parseInt(row[2], 10) || null,
        metascore: parseInt(row[3], 10) || null,
        scope: parseScopeOrNull(row[4]),
        estimatedPlayerCount: parseNumberWithLetterScale(row[5]),
        description: row[6] || null,
        environmentalTheme: parseStringList(row[7]),
        unSDGAlignment: parseNumberList(row[8]),
        salience: row[9] || null,
        timeline: parseTimelineOrNull(row[10]),
        disposition: parseDispositionOrNull(row[11]),
        technology: parseTechnologyOrNull(row[12]),
        messaging: parseMessagingOrNull(row[13]),
        motivation: parseMotivationOrNull(row[14]),
        notableAchievements: row[15] || null,
      }));
}

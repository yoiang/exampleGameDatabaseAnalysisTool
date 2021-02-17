import { NextApiRequest, NextApiResponse } from 'next'

import { google } from "googleapis";
import { googleSheetsRawAdapter } from "../../data/DatabaseRow";
import { DatabaseRow } from "../../models/DatabaseRow";

export default async (_req: NextApiRequest, _res: NextApiResponse): Promise<DatabaseRow[]> => {
  return getDatabase()
}

export const getDatabase = async (): Promise<DatabaseRow[]> => {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/ \\n /g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Games",
    });

    const rows = response.data.values;
    return googleSheetsRawAdapter(rows)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    // TODO: report to Sentry
  }

  return [];
}

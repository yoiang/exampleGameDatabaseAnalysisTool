import { parseUnionOrNullFactory } from "../utility/Union"

const ScopeValues = ["Jam/Prototype", "Indie", "AA", "AAA"] as const
export type Scope = typeof ScopeValues[number]
export const parseScopeOrNull = parseUnionOrNullFactory(ScopeValues)

const TimelineValues = ["N/A", "Past", "Present", "Future", "Multiple eras"]
export type Timeline = typeof TimelineValues[number]
export const parseTimelineOrNull = parseUnionOrNullFactory(TimelineValues)

const DispositionValues = ["Optimistic", "Objective", "Pessimistic"]
export type Disposition = typeof DispositionValues[number]
export const parseDispositionOrNull = parseUnionOrNullFactory(DispositionValues)

const TechnologyValues = ["High Tech", "Low Tech", "N/A"]
export type Technology = typeof TechnologyValues[number]
export const parseTechnologyOrNull = parseUnionOrNullFactory(TechnologyValues)

const MessagingValues = ["Implicit", "Explicit"]
export type Messaging = typeof MessagingValues[number]
export const parseMessagingOrNull = parseUnionOrNullFactory(MessagingValues)

const MotivationValues = ["Intrinsic", "Extrinsic"]
export type Motivation = typeof MotivationValues[number]
export const parseMotivationOrNull = parseUnionOrNullFactory(MotivationValues)

export interface DatabaseRow {
  title: string | null;
  developer: string | null;
  year: number | null;
  metascore: number | string | null;
  scope: Scope | null;
  estimatedPlayerCount: number | null;
  description: string | null;
  environmentalTheme: string[] | null;
  unSDGAlignment: number[] | null;
  salience: string | null;
  timeline: Timeline | null;
  disposition: Disposition | null;
  technology: Technology | null;
  messaging: Messaging | null;
  motivation: Motivation | null;
  notableAchievements: string | null;
}

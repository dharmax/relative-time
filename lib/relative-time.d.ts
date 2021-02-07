/**
 * @return string representing time difference nicely
 * @param t1 either the time or the base time
 * @param t2 if not given, it assumes base time is present time.
 * @param gross - either more accurate or more gross
 * @param language (currently english only)
 */
export declare function relativeTime(t1: Date, t2?: Date, gross?: boolean, language?: string): string;

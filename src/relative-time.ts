
/**
 * @return string representing time difference nicely
 * @param t1 either the time or the base time
 * @param t2 if not given, it assumes base time is present time.
 * @param gross - either more accurate or more gross
 * @param language (currently english only)
 */
export function relativeTime(t1: Date, t2?: Date, gross = true, language = 'en') {
    if (!t2) {
        t2 = new Date(t1)
        t1 = new Date()
    }
    const diffInMinutes = (t1.getTime() - t2.getTime()) / 60000
    const timeParts = [
        {Year: Math.floor(diffInMinutes / 60 / 24 / 30 / 12)},
        {Month: Math.floor(diffInMinutes / 60 / 24 / 30)},
        {Week: Math.floor(diffInMinutes / 60 / 24 / 7)},
        {Day: Math.floor(diffInMinutes / 60 / 24)},
        {Hour: Math.floor(diffInMinutes / 60)},
        {Minute: Math.round(diffInMinutes / 5) * 5}
    ]
    let result = ''
    let levels = 2
    for (let v of timeParts) {
        const timePartValue = Object.values(v)[0]
        if (!timePartValue)
            continue
        let name = Object.keys(v)[0]
        if (timePartValue > 1)
            name += 's'
        result += timePartValue + ' ' + name + ' '
        if (gross || !--levels)
            break
    }
    if (!result.length)
        return ''
    switch (language) {
        case 'en':
            return result + ' ago'
        case 'he':
            return `${result} לפני`
    }

}
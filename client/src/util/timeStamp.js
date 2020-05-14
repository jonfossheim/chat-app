import spacetime from "spacetime";



export const timeStamp = () => {
    const s = spacetime(new Date().getTime())
    return s.unixFmt('h:mm a')
}
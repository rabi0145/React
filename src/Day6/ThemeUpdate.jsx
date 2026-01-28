import {useState} from "react"
import "./theme_update.css"
let ThemeUpdate = () => {
    const [isDark, setIsDark] = useState(false)
    return (
        <div>
            <h1>Theme Update</h1>
            <button onClick={() => setIsDark(true)}>Dark</button>
            <button onClick={() => setIsDark(false)}>light</button>
            <div className={`card ${isDark ? "dark" : ""}`}>
                <h5>This is Card</h5>
            </div>
        </div>
    )
}
export default ThemeUpdate
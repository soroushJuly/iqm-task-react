import { useState } from 'react'
import './App.css'
import MoodletFSC from './components/MoodletFSC'
import BaseDropdown from './components/base/BaseDropdown'

function App() {
  const [displayType, setDisplayType] = useState("word")
  const [buttonSize, setButtonSize] = useState("md")

  return (
    <>
      <h3>FSM Moodlet Preview</h3>
      <section className='fsm-moodle-preview'>
        <BaseDropdown title="Display Type" options={["word", "letter"]} selected={displayType} onChange={(option) => {
          setDisplayType(option)
        }} />
        <BaseDropdown title="Button Size" options={["sm", "md", "lg"]} selected={buttonSize} onChange={(option) => {
          setButtonSize(option)
        }} />
        {/* Write some tests too */}
        <MoodletFSC displayType={displayType} buttonSize={buttonSize} />
      </section>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'

// icons
import { BsPlusCircleDotted } from 'react-icons/bs'

const Notes = () => {

    const [note, setNote] = useState(false)
    const [text, setText] = useState('')
    const [color, setColor] = useState('')

    const colors = ['#8453c2', "#008f7a", '#008e9b', '#ffc75f', '#ff8066', '#ba3caf', '#00ff00']
    const randomColor = () => colors[Math.floor(Math.random() * colors.length)]

    const addNote = () => {
        setNote(true)
    }

    const deleteNote = () => {
        localStorage.removeItem('note')
        setNote(false)
        setText('')
    }

    useEffect(() => {
        const storedNote = localStorage.getItem('note')
        if (storedNote) {
          setText(storedNote)
          setNote(true)
        }
        setColor(randomColor())
    }, [])

    useEffect(() => {
        const saveNote = () => {
            localStorage.setItem('note', text)
        }
        saveNote()
    }, [text])

  if(!note) {
    return (
        <div className="add-notes" onClick={addNote}>
            <BsPlusCircleDotted />
            <h2>Adicionar</h2>
        </div>
    )
  } else if(note){
    return (
        <div className='notes' style={{backgroundColor: color}}>
            <span className='remove' onClick={deleteNote}>X</span>
            <textarea onChange={(e) => setText(e.target.value)} value={text}></textarea>
        </div>
    )
  }
}

export default Notes
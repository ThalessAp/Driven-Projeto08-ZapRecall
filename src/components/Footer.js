export default function Footer(footer, anwser) {



  return (
    <>
      <div className="footer">
        0/8 CONCLUIDOS
        
      </div>
      <div className="emojis">
        {footer.map((anwser, index) => (
          <span key={index}>{anwser}</span>
        ))}

      </div>

    </>
  )
}
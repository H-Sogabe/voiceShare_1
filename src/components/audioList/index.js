export default function AudioList({ list }) {
  return (
    <ul className="audio_list">
      {list.map((item) => {
        return (
          <li className="listItem" key={item.id}>
            <h3>{item.line}</h3>
            <audio controls>
              <source
                src={`data:audio/wav;base64,${item.voice}`}
                type="audio/mp3"
              />
            </audio>
          </li>
        );
      })}
    </ul>
  );
}

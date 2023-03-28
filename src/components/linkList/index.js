import Link from "next/link";

export default function LinkList({ titles }) {
  return (
    <ul className="case_list">
      {titles.map((item) => {
        return (
          <Link
            className="link"
            href={`playlist/${item.title_en}`}
            key={item.title_en}
          >
            <li className="listItem">
              <h3>{item.title_ja}</h3>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

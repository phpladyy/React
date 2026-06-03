export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Add something to your packing list</p>;
  const totalItems = items.length;
  const totalPacked = items.reduce((acc, cur) => acc + cur.packed, 0);

  const percentagePacked = +((totalPacked / totalItems) * 100).toFixed(2);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You're ready to go!"
          : ` You have ${totalItems} items on your list, and you already packed
        ${totalPacked} (${percentagePacked}%) of them`}
      </em>
    </footer>
  );
}

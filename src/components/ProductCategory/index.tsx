import "./styles.css";

type Props = {
  name: string;
};

export default function ProductCategory({name}: Props) {
  return (
    <div>
      <div className="dsc-category">
        {name}
        </div>
    </div>
  );
}

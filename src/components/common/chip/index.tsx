interface ChipProps {
  name: string;
}

const Chip = ({ name }: ChipProps) => {
  return (
    <span className="caption1 text-gray-400 bg-gray-100 py-2 px-3 rounded-lg w-max">
      # {name}
    </span>
  );
};

export default Chip;

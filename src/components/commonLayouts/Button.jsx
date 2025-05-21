const Button = ({
  text,
  bg = "#FF624C",
  color = "#fff",
  py = "16px",
  px = "40px",
  fontName = "Montserrat",
  weight = "bold",
  fontSize = "20px",
  rounded = "10px",
  border = "transparent",
}) => {
  return (
    <button
      style={{
        background: bg,
        border: border,
        color: color,
        padding: `${py} ${px}`,
        fontFamily: fontName,
        fontSize: fontSize,
        fontWeight: weight,
        borderRadius: rounded,
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;

// const Button = ({text,bg="#FF624C",fontName="Montserrat",fontWeight="bold",size="xl",color="white", paddingX="10",paddingY="4",radius="10"}) => {
//   return (
//     <button className={ `bg-[${bg}] font-${fontName} font-${fontWeight} text-${size} text-${color} px-${paddingX} py-${paddingY} rounded-[${radius}px]`}>{text}</button>
//   )
// }

// export default Button

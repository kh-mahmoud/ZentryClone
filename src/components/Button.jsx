


const Button = ({title,id,rightIcon,leftIcon,classes}) => {
  return (
    <button id={id} className={`group flex gap-3 items-center relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${classes}`}> 
        {leftIcon}
        <span className="text-xs   uppercase font-general">
             <div>
                {title}
             </div>
        </span>
        {rightIcon}
    </button>
  );
}

export default Button;

import Link from "next/link";
import "./FilterButton.css";
import Image from "next/image";

interface buttonDetails {
  item: {
    name: string,
    link: string,
    image: string
  }
}

function FilterButton({item}: buttonDetails) {

    const {name, link, image} =  item;

  return (
    <div className="filterButtonWrap">
      <Link href={link}>
        <div className="filterButtonContainer">
          <div className="filterButtonImage">
            <Image 
            style={{ objectFit: 'cover' }} 
            width={2000} 
            height={1500} 
            src={image} 
            alt={name || "Filter Image"} />
            <p>{name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FilterButton;

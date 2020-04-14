import React from "react";
import "./directory.styles.scss";
import MenuItem from "./../../components/menu-item/menu-item.component";

class DirectoryMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imgUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "",
        },
        {
          title: "sneakers",
          imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "",
        },
        {
          title: "womens",
          imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "",
          size: "large",
        },
        {
          title: "mens",
          imgUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "",
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSections }) => (
          <MenuItem key={id} {...otherSections} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;

import {Component} from "react";
import {connect} from "react-redux";
import {RootState} from "../app/store";

import LangSelect from "../features/lang/LangSelect";
import PageSelect from "../features/page/PageSelect";
import {setPages, pageSize} from "../features/page/pageSlice";
import Clock from "../components/Clock";

export interface IData {
  date: string
  name: string
  review: string
}

interface IProps {
  lang: "ru" | "en"
  start: number
  pages: number
}

class Home extends Component {
  state = {
    ru: [],
    en: [],
  }

  componentDidMount() {
    if (this.state.ru.length) {
      return;
    }
    void this.fetchData();
  }

  fetchData = async () => {
    try {
      const {setPages} = this.props as {setPages: (pages: number) => void}
      const response = await fetch('http://localhost:3000/db/data.json');
      const jsonData = await response.json();
      this.setState({
        ru: Object.values(jsonData.ru),
        en: Object.values(jsonData.en),
      });
      setPages(Math.ceil(Object.values(jsonData.ru).length / pageSize))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  shortName(fullName: string) {
    const [surname, name] = fullName.split(" ");
    const abb = name? ` ${name.slice(0, 1)}.`: "";
    return surname + abb;
  }

  render() {
    const {
      lang,
      start,
      // pages,
    } = this.props as IProps;

    return (
      <>
        <header>
          <img src="https://placebear.com/250/150" alt="logo" />
          <div className="teal">
            <p>Выбор языка:</p>
            <LangSelect/>
          </div>
          <Clock/>
        </header>
        <PageSelect/>
        <ul>
          {
            this.state["ru" === lang? "ru": "en"]
              .slice(start * pageSize, (start + 1) * pageSize)
              .map((it: IData, index) => (
                <li key={index}>
                  {it.date} <b>{this.shortName(it.name)}</b> {it.review}
                </li>
              ))
          }
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  lang: state.lang.value,
  start: state.page.start,
  pages: state.page.pages,
});

export default connect(mapStateToProps, {setPages})(Home);

import {Component, ChangeEvent} from "react";
import {connect} from "react-redux";
import {RootState} from "../../app/store";
import {setLang} from './langSlice';

class LangSelect extends Component {
  handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const {setLang} = this.props as {setLang: (lang: string) => void}
    setLang(e.target.value);
  };

  render() {
    const {lang} = this.props as {lang: string}

    return (
      <>
        <select value={lang} onChange={this.handleChange}>
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({ lang: state.lang.value });
export default connect(mapStateToProps, {setLang})(LangSelect);

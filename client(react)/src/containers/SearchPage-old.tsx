import React from "react";
import Column from "../components/Column";
import Product from "../components/Product";
import Row from "../components/Row";
import ProductService from "../services/ProductService";
import { ProductType, StoreType, CurrencyRateType } from "../types";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import CartActions from "../store/actions/CartActions";
import Paginate from "../components/Paginate";
import LoadingWrapper from "../components/LoadingWrapper";
import LoadingActions from "../store/actions/LoadingActions";
type Props = {
  selectedCurrency: CurrencyRateType;
  showLoader: () => void;
  hideLoader: () => void;
} & RouteComponentProps;

type State = {
  prodname: Map<string, string>;
  plist: ProductType[];
  totalPages: number;
  pageNumber: number;
  pageSize: number;
};

class SearchPage extends React.Component<Props, State> {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  state: State = {
    prodname: new Map<string, string>(),
    plist: [],
    totalPages: 0,
    pageNumber: 1,
    pageSize: 20,
  };

  componentDidMount() {
    // let converted = new Map(Object.entries(this.props.location.state));
    // this.setState({ prodname: this.props.location.state });
    this.getData();
  }

  async getData() {
    try {
      this.props.showLoader();
      const { data } = await ProductService.searchByProductName(
        "name",
        this.state.pageNumber,
        this.state.pageSize
      );
      this.setState({
        plist: data.data,
        totalPages: data.totalPages,
        pageNumber: data.currentPage,
      });
      this.props.hideLoader();
    } catch (e) {
      console.log("error", e);
      this.props.hideLoader();
    }
  }
  render() {
    console.log(location.pathname);
    //console.log(history.location.state);

    return <div>hello</div>;
  }
}

// connect(how to connect)(what to connect/component)
// store data can be accessed thru the props of the component
const mapStoreToProps = (store: StoreType) => {
  return {
    selectedCurrency: store.currency, // undefined => INR => USD
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    hideLoader: () => dispatch(LoadingActions.hideLoader()),
    showLoader: () => dispatch(LoadingActions.showLoader()),
  };
};
//export default connect(mapStoreToProps, mapDispatchToProps)(SearchPage);

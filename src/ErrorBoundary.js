import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      redirect: false,
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error ", error, info);
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000); //nabigate('/'),5000 cpuld also be done. It comes from reach router as well
    }
  }
  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    if (this.state.hasError)
      return (
        <h1>
          This listing has an error. <Link to="/">Click Here </Link> or wait for
          5 sec
        </h1>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;

import React from "react";
import { Registry, withRegistry } from '@bem-react/di';
import Footer from "./components/Footer/Footer@mobile.tsx"
import Header from "./components/Header/Header@mobile.tsx"
import App from './components/MainContainer.tsx';
import { cn } from '@bem-react/classname';

const registry = new Registry({ id: cn("App")() });

registry.set(cn("Header")(), () => <Header />);
registry.set(cn("Footer")(), () => <Footer />);

const Mobile = withRegistry(registry)(App);
export default Mobile;
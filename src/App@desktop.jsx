import React from "react";
import { Registry, withRegistry } from '@bem-react/di';
import Footer from "./components/Footer/Footer@desktop.tsx"
import Header from "./components/Header/Header@desktop.tsx"
import App from './components/MainContainer.tsx';
import { cn } from '@bem-react/classname';

const registry = new Registry({ id: cn("App")() });

registry.set(cn("Header")(), () => <Header />);
registry.set(cn("Footer")(), () => <Footer />);

const Desktop = withRegistry(registry)(App);
export default Desktop;

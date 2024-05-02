"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Modal from "@/components/modal";
import Main from "@/components/main";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/service/queryClient";
import { Provider} from 'react-redux';
import store from '../store'
import propValid from "@emotion/is-prop-valid"
import { StyleSheetManager } from "styled-components";

function openModal() {
  console.log('teste')
}

export default function Home() {
  return (
    <StyleSheetManager shouldForwardProp={propValid}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Header bg_header_color="#0F52BA" />
          <Main />
          <Modal />
          <Footer />
        </QueryClientProvider >
      </Provider>
    </StyleSheetManager>
  );
}

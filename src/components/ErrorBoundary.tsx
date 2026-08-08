import { Component, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-[#f7f5ff] dark:bg-[#141318]">
          <div className="flex flex-col gap-3 text-center max-w-[420px]">
            <h1 className="font-['Montserrat',sans-serif] font-bold text-[24px] text-black dark:text-[#f2f0f6]">
              Something went wrong.
            </h1>
            <p className="font-['Montserrat',sans-serif] font-medium text-[15px] text-[#666] dark:text-[#a5a2ac] leading-relaxed">
              Please refresh the page. If the problem persists, you can reach me at{" "}
              <a
                href="mailto:daoyinloluwa@gmail.com"
                className="text-[#6751a4] underline"
              >
                daoyinloluwa@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

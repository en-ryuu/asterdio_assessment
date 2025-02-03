import { Box, Heading, Text } from "@chakra-ui/react";
import React, { ErrorInfo } from "react";
import { Button } from "../ui/button";

// Define types for the component props and state
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    // Initialize state to track error status
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error or send it to a logging service
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false });
    window.location.reload(); // Refresh the page
  };

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI when an error is encountered
      return (
        <Box textAlign="center" py={20} px={6}>
          <Heading as="h2" size="xl" mb={4}>
            Oops, something went wrong!
          </Heading>
          <Text mb={6}>
            An error occurred in the application. Please try again.
          </Text>
          <Button onClick={this.resetError} colorScheme="teal">
            Try Again
          </Button>
        </Box>
      );
    }

    // Render the children components when there is no error
    return this.props.children;
  }
}

export default ErrorBoundary;

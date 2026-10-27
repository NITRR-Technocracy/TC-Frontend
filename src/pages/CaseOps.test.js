import React from "react";
import { render, screen } from "@testing-library/react";
import CaseOps from "./CaseOps";

// Mock AOS
jest.mock("aos", () => ({
  init: jest.fn(),
}));

describe("CaseOps 2027 Landing Page", () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  test("renders CASE OPS 2027 hero heading and proposed notice", () => {
    render(<CaseOps />);
    expect(screen.getByRole("heading", { level: 1, name: /CASE OPS 2027/i })).toBeInTheDocument();
    expect(screen.getByText(/Proposed Framework/i)).toBeInTheDocument();
  });

  test("renders What is Case-Ops section and objectives", () => {
    render(<CaseOps />);
    expect(screen.getByRole("heading", { name: /What is Case-Ops\?/i })).toBeInTheDocument();
    expect(screen.getByText(/Real-World Impact/i)).toBeInTheDocument();
    expect(screen.getByText(/Two Specialized Paths/i)).toBeInTheDocument();
  });

  test("renders both planned tracks accurately", () => {
    render(<CaseOps />);
    expect(screen.getByRole("heading", { name: /Case Competition Track/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Product Development Track/i })).toBeInTheDocument();
    expect(screen.getByText(/Cross-Track Availability:/i)).toBeInTheDocument();
  });

  test("renders the four proposed rounds", () => {
    render(<CaseOps />);
    expect(screen.getByText(/ROUND 1/i)).toBeInTheDocument();
    expect(screen.getByText(/ROUND 2/i)).toBeInTheDocument();
    expect(screen.getByText(/ROUND 3/i)).toBeInTheDocument();
    expect(screen.getByText(/ROUND 4/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Aptitude & Screening/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Problem Selection & Proposal/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^Industry Collaboration$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Grand Finale Presentation/i })).toBeInTheDocument();
  });

  test("renders evaluation rubrics and safeguards", () => {
    render(<CaseOps />);
    expect(screen.getByText(/Track-Specific Evaluation Rubric/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Intellectual Property Protection/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Confidentiality & Data Security/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Impartial Evaluation/i })).toBeInTheDocument();
  });

  test("renders tentative timeline with explicit disclaimer", () => {
    render(<CaseOps />);
    expect(screen.getByRole("heading", { name: /Tentative Timeline/i })).toBeInTheDocument();
    expect(screen.getByText(/Exact dates, registration launch, and submission deadlines will be officially announced on the Unstop portal/i)).toBeInTheDocument();
  });
});

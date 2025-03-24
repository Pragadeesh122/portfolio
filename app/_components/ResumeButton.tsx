"use client";

import {useState, ReactNode} from "react";
import {FileText} from "lucide-react";
import {Button} from "@/app/_components/ui/button";
import ResumeModal from "./ResumeModal";

interface ResumeButtonProps {
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  resumePath?: string;
  children?: ReactNode;
}

export default function ResumeButton({
  variant = "default",
  size = "default",
  className = "",
  resumePath = "/resume.pdf",
  children,
}: ResumeButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={openModal}
        className={className}>
        {children || (
          <>
            <FileText className='mr-2 h-4 w-4' />
            Resume
          </>
        )}
      </Button>

      <ResumeModal
        isOpen={isModalOpen}
        onClose={closeModal}
        resumeUrl={resumePath}
      />
    </>
  );
}

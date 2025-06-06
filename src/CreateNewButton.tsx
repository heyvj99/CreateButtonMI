import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFolder,
  FaTasks,
  FaRegStickyNote,
  FaTrophy,
  FaFlag,
  FaRegCalendarAlt,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import "./CreateNewButton.css";

const OPTIONS = [
  { label: "Project", icon: <FaFolder /> },
  { label: "Task", icon: <FaTasks /> },
  { label: "Note", icon: <FaRegStickyNote /> },
  { label: "Goal", icon: <FaTrophy /> },
  { label: "Milestone", icon: <FaFlag /> },
  { label: "Reminder", icon: <FaRegCalendarAlt /> },
];

const CreateNewButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loadingIdx, setLoadingIdx] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Focus management
  useEffect(() => {
    if (open) {
      dialogRef.current?.focus();
    }
  }, [open]);

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    function handle(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [open]);

  // Option selection (simulate loading)
  const handleOptionClick = (idx: number) => {
    setLoadingIdx(idx);
    setTimeout(() => {
      setLoadingIdx(null);
      setOpen(false);
      // Optionally: trigger callback here
    }, 1000);
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="cnb-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Button/Dialog */}
      <motion.button
        className={`cnb-root${open ? " cnb-open" : ""}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Create New"
        onClick={() => setOpen(true)}
        tabIndex={open ? -1 : 0}
        style={{ pointerEvents: open ? "none" : "auto" }}
        whileHover={!open ? { scale: 1.02, boxShadow: "0 4px 16px #0001" } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <FaPlus className="cnb-plus" />
        <span className="cnb-label">Create New</span>
      </motion.button>

      {/* Dialog */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="cnb-dialog"
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Create New"
            initial={{ borderRadius: 24, width: 160, height: 48, opacity: 0.7 }}
            animate={{ borderRadius: 16, width: 340, height: 280, opacity: 1 }}
            exit={{ borderRadius: 24, width: 160, height: 48, opacity: 0.7 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="cnb-dialog-header">
              <span>Create New</span>
              <button
                className="cnb-close"
                aria-label="Close"
                onClick={() => setOpen(false)}
                tabIndex={0}
              >
                <FaTimes />
              </button>
            </div>
            <div className="cnb-options-grid">
              {OPTIONS.map((opt, idx) => (
                <motion.button
                  key={opt.label}
                  className={`cnb-option${
                    loadingIdx === idx ? " cnb-loading" : ""
                  }`}
                  style={{
                    pointerEvents: loadingIdx !== null ? "none" : "auto",
                  }}
                  onClick={() => handleOptionClick(idx)}
                  whileHover={{ scale: 1.05, boxShadow: "0 2px 8px #0001" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.05, duration: 0.3 }}
                  tabIndex={0}
                  aria-label={opt.label}
                >
                  <span className="cnb-icon">{opt.icon}</span>
                  <span className="cnb-opt-label">{opt.label}</span>
                  {loadingIdx === idx && <span className="cnb-spinner" />}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CreateNewButton;

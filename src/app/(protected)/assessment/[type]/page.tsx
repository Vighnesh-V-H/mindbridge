"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  PHQ9_QUESTIONS,
  PHQ9_OPTIONS,
  GAD7_QUESTIONS,
  GAD7_OPTIONS,
  PSS10_QUESTIONS,
  PSS10_OPTIONS,
  WELLNESS_QUESTIONS,
  WELLNESS_OPTIONS,
} from "@/lib/constants";

type AssessmentType = "phq9" | "gad7" | "pss10" | "wellness";

interface AssessmentConfig {
  title: string;
  description: string;
  questions: string[];
  options: { label: string; value: string }[];
}

const assessmentConfigs: Record<AssessmentType, AssessmentConfig> = {
  phq9: {
    title: "PHQ-9 Depression Scale",
    description:
      "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
    questions: PHQ9_QUESTIONS,
    options: PHQ9_OPTIONS,
  },
  gad7: {
    title: "GAD-7 Anxiety Scale",
    description:
      "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
    questions: GAD7_QUESTIONS,
    options: GAD7_OPTIONS,
  },
  pss10: {
    title: "Perceived Stress Scale (PSS-10)",
    description:
      "The questions in this scale ask you about your feelings and thoughts during the last month.",
    questions: PSS10_QUESTIONS,
    options: PSS10_OPTIONS,
  },
  wellness: {
    title: "Wellness Assessment",
    description:
      "Please rate how you feel about the following aspects of your life:",
    questions: WELLNESS_QUESTIONS,
    options: WELLNESS_OPTIONS,
  },
};

export default function AssessmentForm() {
  const params = useParams();
  const router = useRouter();
  const assessmentType = params.type as AssessmentType;

  const [responses, setResponses] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const config = assessmentConfigs[assessmentType];

  if (!config) {
    return (
      <div className='animate-fadeIn'>
        <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg text-center'>
          <h1 className='text-2xl font-bold text-red-600 mb-4'>
            Assessment Not Found
          </h1>
          <p className='text-slate-600 mb-6'>
            The requested assessment type does not exist.
          </p>
          <button
            onClick={() => router.push("/assessment")}
            className='bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition'>
            Back to Assessments
          </button>
        </div>
      </div>
    );
  }

  const handleResponseChange = (questionIndex: number, value: string) => {
    setResponses((prev) => ({
      ...prev,
      [questionIndex]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const unansweredQuestions = config.questions
      .map((_, index) => index)
      .filter((index) => !responses[index]);

    if (unansweredQuestions.length > 0) {
      alert(
        `Please answer all questions. Missing: ${unansweredQuestions.length} question(s)`
      );
      setIsSubmitting(false);
      return;
    }

    const totalScore = Object.values(responses).reduce(
      (sum, value) => sum + parseInt(value),
      0
    );

    const submissionData = {
      responses,
      totalScore,
      timestamp: new Date().toISOString(),
      questionCount: config.questions.length,
    };

    try {
      const res = await fetch(`/api/assessment/${assessmentType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit assessment");
      }

      const data = await res.json();

      alert(
        `Assessment completed! Your score: ${totalScore}/${
          config.questions.length * (config.options.length - 1)
        }`
      );

      console.log("Saved Assessment Response:", data);
      router.push("/assessment");
    } catch (error) {
      console.error(error);
      alert("Error submitting assessment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='animate-fadeIn'>
      <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg'>
        <button
          onClick={() => router.push("/assessment")}
          className='text-indigo-600 hover:text-indigo-800 mb-4 flex items-center gap-2 transition'>
          ← Back to Assessments
        </button>
        <h1 className='text-2xl font-bold text-slate-900 mb-2'>
          {config.title}
        </h1>
        <p className='text-slate-600'>{config.description}</p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        {config.questions.map((question, index) => (
          <div
            key={index}
            className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg'>
            <h3 className='text-lg font-semibold text-slate-900 mb-4'>
              {index + 1}. {question}
            </h3>
            <div className='space-y-3'>
              {config.options.map((option) => (
                <label
                  key={option.value}
                  className='flex items-center space-x-3 cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition'>
                  <input
                    type='radio'
                    name={`question-${index}`}
                    value={option.value}
                    checked={responses[index] === option.value}
                    onChange={(e) =>
                      handleResponseChange(index, e.target.value)
                    }
                    className='w-4 h-4 text-indigo-600 focus:ring-indigo-500'
                  />
                  <span className='text-slate-700'>{option.label}</span>
                  <span className='text-sm text-slate-500'>
                    ({option.value})
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Submit Button */}
        <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-lg'>
          <div className='flex justify-between items-center'>
            <div className='text-sm text-slate-600'>
              Progress: {Object.keys(responses).length} of{" "}
              {config.questions.length} questions answered
            </div>
            <button
              type='submit'
              disabled={
                isSubmitting ||
                Object.keys(responses).length !== config.questions.length
              }
              className='bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:bg-indigo-700 transition'>
              {isSubmitting ? "Submitting..." : "Submit Assessment"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function exportPDF(tasks) {

  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.text("TaskPilot AI Report", 14, 20);

  doc.setFontSize(12);

  doc.text(
    `Generated on: ${new Date().toLocaleDateString()}`,
    14,
    30
  );

  autoTable(doc, {
    startY: 40,

    head: [[
      "Task",
      "Deadline",
      "Category",
      "Hours",
      "Status"
    ]],

    body: tasks.map((task) => [

      task.task,

      task.deadline,

      task.category,

      task.hours,

      task.completed
        ? "Completed"
        : "Pending",

    ]),

  });

  doc.save("TaskPilot_Report.pdf");

}
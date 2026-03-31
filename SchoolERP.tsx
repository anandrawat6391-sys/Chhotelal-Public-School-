import { useMemo, useState, type FormEvent } from "react";

type Student = {
  id: number;
  name: string;
  className: string;
  fatherName: string;
  mobile: string;
  admissionNumber: string;
};

type MessageLog = {
  id: number;
  channel: "whatsapp" | "sms";
  message: string;
  recipients: string[];
  createdAt: string;
  status: "sent" | "queued";
};

const initialStudents: Student[] = [
  { id: 1, name: "Aarav Singh", className: "Class 5", fatherName: "Rakesh Singh", mobile: "7394854399", admissionNumber: "CPS-2026-0001" },
  { id: 2, name: "Diya Verma", className: "Class 7", fatherName: "Anil Verma", mobile: "9811122233", admissionNumber: "CPS-2026-0002" },
  { id: 3, name: "Kabir Yadav", className: "Class 8", fatherName: "Rajeev Yadav", mobile: "9820022200", admissionNumber: "CPS-2026-0003" },
  { id: 4, name: "Meera Gupta", className: "Class 10", fatherName: "Sandeep Gupta", mobile: "9000011111", admissionNumber: "CPS-2026-0004" },
];

const admissionTemplates = {
  en: {
    title: "Admission Form",
    personal: "Personal Details",
    academic: "Academic Details",
    contact: "Contact Details",
    studentName: "Student Name",
    fatherName: "Father Name",
    motherName: "Mother Name",
    className: "Class",
    dob: "Date of Birth",
    gender: "Gender",
    mobile: "Mobile Number",
    address: "Address",
    previousSchool: "Previous School",
    aadhaar: "Aadhaar Number (Optional)",
  },
  hi: {
    title: "प्रवेश फॉर्म",
    personal: "व्यक्तिगत विवरण",
    academic: "शैक्षणिक विवरण",
    contact: "संपर्क विवरण",
    studentName: "छात्र का नाम",
    fatherName: "पिता का नाम",
    motherName: "माता का नाम",
    className: "कक्षा",
    dob: "जन्म तिथि",
    gender: "लिंग",
    mobile: "मोबाइल नंबर",
    address: "पता",
    previousSchool: "पिछला विद्यालय",
    aadhaar: "आधार नंबर (वैकल्पिक)",
  },
};

const feeTemplates = {
  due: "Dear Parent, your ward's fee is due. Please pay by due date.",
  confirm: "Admission confirmed. Welcome to Chhotelal Public School!",
};

export default function SchoolERP() {
  const [activeTab, setActiveTab] = useState<"review" | "search" | "admission" | "whatsapp" | "sms" | "settings" | "feeMaster" | "feeReports" | "deploy">("review");
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const [search, setSearch] = useState({ name: "", mobile: "", className: "", admissionNumber: "" });

  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [admissionNoSeed, setAdmissionNoSeed] = useState(5);
  const [admissionSuccess, setAdmissionSuccess] = useState("");
  const [admissionForm, setAdmissionForm] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    className: "",
    dob: "",
    gender: "",
    mobile: "",
    address: "",
    previousSchool: "",
    aadhaar: "",
  });

  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  const [whatsAppMessage, setWhatsAppMessage] = useState("Fee reminder: Kindly clear dues to avoid late charges.");
  const [smsMessage, setSmsMessage] = useState(feeTemplates.due);
  const [manualNumbers, setManualNumbers] = useState("");
  const [messageLogs, setMessageLogs] = useState<MessageLog[]>([]);

  const [schoolSettings, setSchoolSettings] = useState({ schoolName: "Chhotelal Public School", logo: "", address: "Main Road, Prayagraj", contact: "+91 73948 54399" });
  const [studentSettings, setStudentSettings] = useState({ defaultClasses: "Nursery, LKG, UKG, Class 1-12", feeDefaults: "Monthly tuition + transport + exam" });
  const [loginSettings, setLoginSettings] = useState({ username: "admin", password: "", subAdmin: "" });

  const [feeHeads, setFeeHeads] = useState(["Tuition", "Admission", "Exam"]);
  const [newFeeHead, setNewFeeHead] = useState("");
  const [feeClassMap, setFeeClassMap] = useState([
    { className: "Class 5", amount: 24000, scheme: "Annual" },
    { className: "Class 7", amount: 27000, scheme: "Annual" },
  ]);

  const [reportFilters, setReportFilters] = useState({ from: "", to: "", className: "", student: "" });

  const filteredStudents = useMemo(() => {
    const name = search.name.toLowerCase();
    return students.filter((s) =>
      s.name.toLowerCase().includes(name) &&
      s.mobile.includes(search.mobile) &&
      s.className.toLowerCase().includes(search.className.toLowerCase()) &&
      s.admissionNumber.toLowerCase().includes(search.admissionNumber.toLowerCase()),
    );
  }, [search, students]);

  const t = admissionTemplates[language];
  const nextAdmissionNumber = `CPS-2026-${String(admissionNoSeed).padStart(4, "0")}`;

  const validateAdmission = () => {
    const required = ["studentName", "fatherName", "motherName", "className", "dob", "gender", "mobile", "address", "previousSchool"];
    for (const key of required) {
      if (!(admissionForm as Record<string, string>)[key]?.trim()) return `${key} is required`;
    }
    if (!/^\d{10}$/.test(admissionForm.mobile)) return "Mobile must be 10 digits";
    if (admissionForm.aadhaar && !/^\d{12}$/.test(admissionForm.aadhaar)) return "Aadhaar must be 12 digits";
    return "";
  };

  const handleAdmissionSubmit = (e: FormEvent) => {
    e.preventDefault();
    const error = validateAdmission();
    if (error) {
      setAdmissionSuccess(`❌ ${error}`);
      return;
    }

    const newStudent: Student = {
      id: Date.now(),
      name: admissionForm.studentName,
      className: admissionForm.className,
      fatherName: admissionForm.fatherName,
      mobile: admissionForm.mobile,
      admissionNumber: nextAdmissionNumber,
    };

    setStudents((prev) => [newStudent, ...prev]);
    setAdmissionNoSeed((v) => v + 1);
    setAdmissionForm({ studentName: "", fatherName: "", motherName: "", className: "", dob: "", gender: "", mobile: "", address: "", previousSchool: "", aadhaar: "" });
    setAdmissionSuccess(`✅ Admission saved successfully. Admission No: ${nextAdmissionNumber}`);
  };

  const toggleStudent = (id: number) => {
    setSelectedStudents((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const openWhatsApp = (numbers: string[]) => {
    if (!numbers.length || !whatsAppMessage.trim()) return;
    const encoded = encodeURIComponent(whatsAppMessage);
    const primary = numbers[0];
    window.open(`https://wa.me/+91${primary}?text=${encoded}`, "_blank");
    setMessageLogs((prev) => [
      { id: Date.now(), channel: "whatsapp", message: whatsAppMessage, recipients: numbers, createdAt: new Date().toLocaleString(), status: numbers.length > 1 ? "queued" : "sent" },
      ...prev,
    ]);
  };

  const handleBulkSMS = () => {
    const selectedNumbers = students.filter((s) => selectedStudents.includes(s.id)).map((s) => s.mobile);
    const manual = manualNumbers
      .split(",")
      .map((n) => n.trim())
      .filter(Boolean);
    const allRecipients = [...new Set([...selectedNumbers, ...manual])];
    if (!allRecipients.length || !smsMessage.trim()) return;

    setMessageLogs((prev) => [
      { id: Date.now(), channel: "sms", message: smsMessage, recipients: allRecipients, createdAt: new Date().toLocaleString(), status: "sent" },
      ...prev,
    ]);
  };

  const exportCSV = () => {
    const rows = [
      ["Date", "Student", "Class", "Amount", "Mode"],
      [new Date().toISOString().slice(0, 10), "Aarav Singh", "Class 5", "2500", "Cash"],
      [new Date().toISOString().slice(0, 10), "Diya Verma", "Class 7", "3200", "Online"],
    ];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "fee-report.csv";
    link.click();
  };

  const tabs = [
    ["review", "Project Review"],
    ["search", "Student Search"],
    ["admission", "Admission Form"],
    ["whatsapp", "WhatsApp"],
    ["sms", "Bulk SMS"],
    ["settings", "Settings"],
    ["feeMaster", "Fee Master"],
    ["feeReports", "Fee Reports"],
    ["deploy", "Vercel Ready"],
  ] as const;

  return (
    <section className="bg-slate-50 py-16" id="erp-suite">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">School ERP Suite</p>
          <h2 className="text-3xl font-bold text-slate-900">Fee & Admission Management Dashboard</h2>
          <p className="mt-2 text-sm text-slate-600">Modern, mobile-first modules with real-time filtering, bilingual admissions, messaging, fee controls, and deployment checklist.</p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${activeTab === key ? "bg-blue-700 text-white" : "bg-white text-slate-700"}`}
            >
              {label}
            </button>
          ))}
        </div>



        {activeTab === "review" && (
          <div className="rounded-2xl bg-white p-4 shadow-sm md:p-6">
            <h3 className="text-2xl font-bold text-slate-900">Project Review</h3>
            <p className="mt-2 text-sm text-slate-600">This view gives a quick review of what is currently implemented in your school ERP project.</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-xl border p-4"><p className="text-xs text-slate-500">Student Module</p><p className="mt-1 font-semibold">Advanced Search + Cards</p></div>
              <div className="rounded-xl border p-4"><p className="text-xs text-slate-500">Admissions</p><p className="mt-1 font-semibold">Bilingual form + validation</p></div>
              <div className="rounded-xl border p-4"><p className="text-xs text-slate-500">Messaging</p><p className="mt-1 font-semibold">WhatsApp + Bulk SMS</p></div>
              <div className="rounded-xl border p-4"><p className="text-xs text-slate-500">Fees</p><p className="mt-1 font-semibold">Fee master + reports</p></div>
            </div>
            <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">
              Tip: use the tabs to review each module in detail and continue with backend/database integration for production.
            </div>
          </div>
        )}

        {activeTab === "search" && (
          <div className="rounded-2xl bg-white p-4 shadow-sm md:p-6">
            <div className="grid gap-3 md:grid-cols-4">
              <input className="rounded-lg border p-2" placeholder="Search by name" value={search.name} onChange={(e) => setSearch({ ...search, name: e.target.value })} />
              <input className="rounded-lg border p-2" placeholder="Mobile number" value={search.mobile} onChange={(e) => setSearch({ ...search, mobile: e.target.value })} />
              <input className="rounded-lg border p-2" placeholder="Class" value={search.className} onChange={(e) => setSearch({ ...search, className: e.target.value })} />
              <input className="rounded-lg border p-2" placeholder="Admission number" value={search.admissionNumber} onChange={(e) => setSearch({ ...search, admissionNumber: e.target.value })} />
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredStudents.map((student) => (
                <div key={student.id} className="rounded-xl border border-slate-200 p-4">
                  <h3 className="text-lg font-bold text-slate-900">{student.name}</h3>
                  <p className="text-sm text-slate-600">{student.className}</p>
                  <p className="mt-2 text-sm"><span className="font-semibold">Father:</span> {student.fatherName}</p>
                  <p className="text-sm"><span className="font-semibold">Mobile:</span> {student.mobile}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button className="rounded-md bg-blue-700 px-3 py-1 text-xs text-white">View Profile</button>
                    <button className="rounded-md bg-emerald-600 px-3 py-1 text-xs text-white">Collect Fee</button>
                    <button className="rounded-md bg-amber-500 px-3 py-1 text-xs text-white">Edit Student</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "admission" && (
          <form onSubmit={handleAdmissionSubmit} className="rounded-2xl bg-white p-4 shadow-sm md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo.jpg" alt="School logo" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-bold">{t.title}</h3>
                  <p className="text-xs text-slate-500">Admission No (Auto): {nextAdmissionNumber}</p>
                </div>
              </div>
              <button type="button" onClick={() => setLanguage((v) => (v === "en" ? "hi" : "en"))} className="rounded-md bg-slate-800 px-4 py-2 text-sm text-white">{language === "en" ? "हिंदी" : "English"}</button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border p-4">
                <h4 className="mb-3 font-semibold">{t.personal}</h4>
                <input className="mb-2 w-full rounded-lg border p-2" placeholder={t.studentName} value={admissionForm.studentName} onChange={(e) => setAdmissionForm({ ...admissionForm, studentName: e.target.value })} />
                <input className="mb-2 w-full rounded-lg border p-2" placeholder={t.fatherName} value={admissionForm.fatherName} onChange={(e) => setAdmissionForm({ ...admissionForm, fatherName: e.target.value })} />
                <input className="w-full rounded-lg border p-2" placeholder={t.motherName} value={admissionForm.motherName} onChange={(e) => setAdmissionForm({ ...admissionForm, motherName: e.target.value })} />
              </div>

              <div className="rounded-xl border p-4">
                <h4 className="mb-3 font-semibold">{t.academic}</h4>
                <input className="mb-2 w-full rounded-lg border p-2" placeholder={t.className} value={admissionForm.className} onChange={(e) => setAdmissionForm({ ...admissionForm, className: e.target.value })} />
                <input className="mb-2 w-full rounded-lg border p-2" type="date" placeholder={t.dob} value={admissionForm.dob} onChange={(e) => setAdmissionForm({ ...admissionForm, dob: e.target.value })} />
                <select className="w-full rounded-lg border p-2" value={admissionForm.gender} onChange={(e) => setAdmissionForm({ ...admissionForm, gender: e.target.value })}>
                  <option value="">{t.gender}</option><option>Male</option><option>Female</option><option>Other</option>
                </select>
              </div>

              <div className="rounded-xl border p-4">
                <h4 className="mb-3 font-semibold">{t.contact}</h4>
                <input className="mb-2 w-full rounded-lg border p-2" placeholder={t.mobile} value={admissionForm.mobile} onChange={(e) => setAdmissionForm({ ...admissionForm, mobile: e.target.value })} />
                <input className="mb-2 w-full rounded-lg border p-2" placeholder={t.address} value={admissionForm.address} onChange={(e) => setAdmissionForm({ ...admissionForm, address: e.target.value })} />
                <input className="mb-2 w-full rounded-lg border p-2" placeholder={t.previousSchool} value={admissionForm.previousSchool} onChange={(e) => setAdmissionForm({ ...admissionForm, previousSchool: e.target.value })} />
                <input className="w-full rounded-lg border p-2" placeholder={t.aadhaar} value={admissionForm.aadhaar} onChange={(e) => setAdmissionForm({ ...admissionForm, aadhaar: e.target.value })} />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button className="rounded-md bg-blue-700 px-5 py-2 font-semibold text-white">Save Admission</button>
              {admissionSuccess && <span className="text-sm font-medium text-slate-700">{admissionSuccess}</span>}
            </div>
          </form>
        )}

        {activeTab === "whatsapp" && (
          <div className="rounded-2xl bg-white p-4 shadow-sm md:p-6">
            <h3 className="text-xl font-bold">Send WhatsApp</h3>
            <textarea className="mt-3 w-full rounded-lg border p-3" rows={4} value={whatsAppMessage} onChange={(e) => setWhatsAppMessage(e.target.value)} />
            <div className="mt-3 flex flex-wrap gap-2">
              <button className="rounded-md bg-green-600 px-4 py-2 text-white" onClick={() => openWhatsApp(students.filter((s) => selectedStudents.includes(s.id)).map((s) => s.mobile))}>Send Selected</button>
              <button className="rounded-md bg-emerald-700 px-4 py-2 text-white" onClick={() => openWhatsApp(students.map((s) => s.mobile))}>Send to All</button>
            </div>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {students.map((s) => (
                <label key={s.id} className="flex items-center gap-2 rounded border p-2 text-sm">
                  <input type="checkbox" checked={selectedStudents.includes(s.id)} onChange={() => toggleStudent(s.id)} /> {s.name} ({s.mobile})
                </label>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">WhatsApp link format used: https://wa.me/+917394854399?text=YOUR_MESSAGE</p>
          </div>
        )}

        {activeTab === "sms" && (
          <div className="rounded-2xl bg-white p-4 shadow-sm md:p-6">
            <h3 className="text-xl font-bold">Bulk SMS</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <button onClick={() => setSmsMessage(feeTemplates.due)} className="rounded bg-slate-200 px-3 py-1 text-sm">Fee due reminder</button>
              <button onClick={() => setSmsMessage(feeTemplates.confirm)} className="rounded bg-slate-200 px-3 py-1 text-sm">Admission confirmation</button>
            </div>
            <textarea className="mt-3 w-full rounded-lg border p-3" rows={4} value={smsMessage} onChange={(e) => setSmsMessage(e.target.value)} />
            <p className="text-xs text-slate-500">Characters: {smsMessage.length}</p>
            <textarea className="mt-3 w-full rounded-lg border p-3" rows={2} placeholder="Add extra numbers separated by comma" value={manualNumbers} onChange={(e) => setManualNumbers(e.target.value)} />
            <button className="mt-3 rounded-md bg-blue-700 px-4 py-2 text-white" onClick={handleBulkSMS}>Send Bulk SMS</button>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h4 className="font-bold">School Settings</h4>
              <input className="mt-2 w-full rounded border p-2" value={schoolSettings.schoolName} onChange={(e) => setSchoolSettings({ ...schoolSettings, schoolName: e.target.value })} placeholder="School name" />
              <input className="mt-2 w-full rounded border p-2" value={schoolSettings.logo} onChange={(e) => setSchoolSettings({ ...schoolSettings, logo: e.target.value })} placeholder="Logo URL" />
              <input className="mt-2 w-full rounded border p-2" value={schoolSettings.address} onChange={(e) => setSchoolSettings({ ...schoolSettings, address: e.target.value })} placeholder="Address" />
              <input className="mt-2 w-full rounded border p-2" value={schoolSettings.contact} onChange={(e) => setSchoolSettings({ ...schoolSettings, contact: e.target.value })} placeholder="Contact" />
              <button className="mt-3 rounded bg-blue-700 px-4 py-2 text-white">Save</button>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h4 className="font-bold">Student Settings</h4>
              <textarea className="mt-2 w-full rounded border p-2" rows={2} value={studentSettings.defaultClasses} onChange={(e) => setStudentSettings({ ...studentSettings, defaultClasses: e.target.value })} />
              <textarea className="mt-2 w-full rounded border p-2" rows={3} value={studentSettings.feeDefaults} onChange={(e) => setStudentSettings({ ...studentSettings, feeDefaults: e.target.value })} />
              <button className="mt-3 rounded bg-blue-700 px-4 py-2 text-white">Save</button>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h4 className="font-bold">Login Settings</h4>
              <input className="mt-2 w-full rounded border p-2" value={loginSettings.username} onChange={(e) => setLoginSettings({ ...loginSettings, username: e.target.value })} placeholder="Admin username" />
              <input className="mt-2 w-full rounded border p-2" type="password" value={loginSettings.password} onChange={(e) => setLoginSettings({ ...loginSettings, password: e.target.value })} placeholder="New password" />
              <input className="mt-2 w-full rounded border p-2" value={loginSettings.subAdmin} onChange={(e) => setLoginSettings({ ...loginSettings, subAdmin: e.target.value })} placeholder="Add sub-admin user" />
              <button className="mt-3 rounded bg-blue-700 px-4 py-2 text-white">Save</button>
            </div>
          </div>
        )}

        {activeTab === "feeMaster" && (
          <div className="rounded-2xl bg-white p-4 shadow-sm md:p-6">
            <h3 className="text-xl font-bold">Fee Master</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">Fee Heads</h4>
                <div className="mt-2 flex gap-2">
                  <input className="w-full rounded border p-2" placeholder="Add fee head" value={newFeeHead} onChange={(e) => setNewFeeHead(e.target.value)} />
                  <button className="rounded bg-blue-700 px-3 text-white" onClick={() => { if (newFeeHead.trim()) { setFeeHeads((prev) => [...prev, newFeeHead.trim()]); setNewFeeHead(""); } }}>Add</button>
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {feeHeads.map((head) => (
                    <li key={head} className="flex items-center justify-between rounded bg-slate-100 px-3 py-2">{head}<button className="text-xs text-red-600" onClick={() => setFeeHeads((prev) => prev.filter((h) => h !== head))}>Delete</button></li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">Class-wise Fee Master</h4>
                <table className="mt-3 w-full text-sm">
                  <thead><tr className="text-left"><th>Class</th><th>Amount</th><th>Scheme</th></tr></thead>
                  <tbody>
                    {feeClassMap.map((row) => (
                      <tr key={row.className} className="border-t"><td>{row.className}</td><td>₹{row.amount}</td><td>{row.scheme}</td></tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="rounded bg-slate-200 px-3 py-1 text-sm">Fee Copy</button>
                  <button className="rounded bg-slate-200 px-3 py-1 text-sm">Session Wise Copy</button>
                  <button className="rounded bg-slate-200 px-3 py-1 text-sm">Fees Transfer</button>
                  <button className="rounded bg-slate-200 px-3 py-1 text-sm">Edit/Update</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "feeReports" && (
          <div className="rounded-2xl bg-white p-4 shadow-sm md:p-6">
            <h3 className="text-xl font-bold">Fee Reports</h3>
            <div className="mt-3 grid gap-2 md:grid-cols-4">
              <input type="date" className="rounded border p-2" value={reportFilters.from} onChange={(e) => setReportFilters({ ...reportFilters, from: e.target.value })} />
              <input type="date" className="rounded border p-2" value={reportFilters.to} onChange={(e) => setReportFilters({ ...reportFilters, to: e.target.value })} />
              <input className="rounded border p-2" placeholder="Class" value={reportFilters.className} onChange={(e) => setReportFilters({ ...reportFilters, className: e.target.value })} />
              <input className="rounded border p-2" placeholder="Student" value={reportFilters.student} onChange={(e) => setReportFilters({ ...reportFilters, student: e.target.value })} />
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded border p-3"><p className="text-sm text-slate-500">Total Collection</p><p className="text-2xl font-bold">₹1,42,500</p></div>
              <div className="rounded border p-3"><p className="text-sm text-slate-500">Cash</p><p className="text-2xl font-bold">₹70,500</p></div>
              <div className="rounded border p-3"><p className="text-sm text-slate-500">Online</p><p className="text-2xl font-bold">₹72,000</p></div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {["Fee Receipt", "Head Wise", "Discount", "Student Received", "Transport", "Adjustment", "Advance", "Other", "Refund"].map((x) => (
                <span key={x} className="rounded-full bg-slate-100 px-3 py-1">{x}</span>
              ))}
            </div>
            <button className="mt-4 rounded-md bg-blue-700 px-4 py-2 text-white" onClick={exportCSV}>Export to Excel (CSV)</button>
          </div>
        )}

        {activeTab === "deploy" && (
          <div className="rounded-2xl bg-white p-4 shadow-sm md:p-6">
            <h3 className="text-xl font-bold">Vercel Deployment Readiness</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Vercel-compatible structure with <code>src</code>, reusable components, and public assets.</li>
              <li>Environment variable support via <code>.env.example</code> and <code>process.env</code>-based config.</li>
              <li>Use hosted PostgreSQL/Supabase credentials in production (not localhost).</li>
              <li>Server API handlers should live under <code>/api</code> routes for Vercel runtime.</li>
            </ul>
            <div className="mt-4 rounded-lg bg-slate-900 p-4 text-xs text-slate-100">
              Recent logs: {messageLogs.length} entries stored in memory. Integrate with DB table for persistent logs.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

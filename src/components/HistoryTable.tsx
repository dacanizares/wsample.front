import { FindHistoryLog } from "@/api/historyApi";
import { maybePromise } from "@/common/maybeUtils";
import HistoryLog from "@/models/HistoryLog";

interface HistoryTableProps {
  employeeId: number
}

export default async function HistoryTable({ employeeId }: HistoryTableProps) {
  const historyLog = await maybePromise<HistoryLog[]>(() => FindHistoryLog(employeeId), []);
  if (historyLog.length === 0) {
    return null;
  }

  return (
    <div className="relative overflow-x-auto m-auto">
      
      <table className="w-full text-sm text-left text-gray-500 bg-gray-50">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 text-center">
          <tr>
            <th>Date</th>
            <th>Department name</th>
          </tr>
        </thead>
        <tbody>
          {historyLog.map((log) =>
          <tr className="border-b">
            <td className="px-6 py-4">{log.date}</td>
            <td className="px-6 py-4">{log.departmentName}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const ChartResult = () => {

    const resultData = [
  {
    "id": 1,
    "name": "Rahim Ahmed",
    "marks": { "physics": 78, "chemistry": 72, "math": 85 }
  },
  {
    "id": 2,
    "name": "Karim Hasan",
    "marks": { "physics": 65, "chemistry": 70, "math": 68 }
  },
  {
    "id": 3,
    "name": "Ayesha Rahman",
    "marks": { "physics": 88, "chemistry": 91, "math": 95 }
  },
  {
    "id": 4,
    "name": "Nusrat Jahan",
    "marks": { "physics": 74, "chemistry": 80, "math": 77 }
  },
  {
    "id": 5,
    "name": "Tanvir Islam",
    "marks": { "physics": 82, "chemistry": 79, "math": 84 }
  },
  {
    "id": 6,
    "name": "Sadia Akter",
    "marks": { "physics": 90, "chemistry": 85, "math": 92 }
  },
  {
    "id": 7,
    "name": "Mehedi Hasan",
    "marks": { "physics": 68, "chemistry": 64, "math": 70 }
  },
  {
    "id": 8,
    "name": "Farhana Chowdhury",
    "marks": { "physics": 76, "chemistry": 81, "math": 78 }
  },
  {
    "id": 9,
    "name": "Rifat Hossain",
    "marks": { "physics": 59, "chemistry": 63, "math": 66 }
  },
  {
    "id": 10,
    "name": "Jannat Ara",
    "marks": { "physics": 85, "chemistry": 88, "math": 90 }
  }
]

    // ✅ Convert data
    const chartData = resultData.map(student => ({
        name: student.name,
        value: student.marks.physics // you can change subject
    }));

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={chartData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
            />
            <Tooltip />
        </PieChart>
    );
};

export default ChartResult;
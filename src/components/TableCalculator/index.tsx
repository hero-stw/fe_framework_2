import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  roundTo2,
  numDot,
  l100,
  avgOfArray,
  removecommas,
  msToHMS,
} from "../../commons/index";
import { randomCalculation, setInput } from "@/store/slice/calculationSlice";
import { randomNumber } from "@/store/slice/numberSlice";
import {
  saveDuration,
  saveInputValue,
  saveStart,
} from "@/store/slice/resultSlice";
import { saveTotal } from "@/store/slice/totalSlice";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRecords } from "@/hooks/records";
import { currencyMask } from "@/commons/index";

type TableProps = {
  percent: number;
};

const TableCalculator = ({ percent }: TableProps) => {
  const [show, setShow] = useState(false);
  const [dot, setDot] = useState({ answer: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDot({ ...dot, [e.target.name]: e.target.value });
  };

  const [calculation, setCalculation] = useState([]);

  const [showTotal, setShowTotal] = useState(true);

  const marginOfError = useSelector((state: any) => state.result.sumError);

  const input = useSelector((state: any) => state.calculation.input);

  const avgTime = useSelector((state: any) => state.result.avgTime);

  const { UseAddRecord } = useRecords();

  // Danh sách phép tính
  const calculationList = useSelector(
    (state: any) => state.calculation.calculations
  );

  const ref = useRef(null);
  // Phép tính option

  const optionCalculation = useSelector(
    (state: any) => state.calculation.options
  );

  const Operations = useSelector((state: any) => state.calculation.Operations);
  const dispatch = useDispatch();

  const s = useSelector((state: any) => state.calculation.calculation);

  const a = useSelector((state: any) => state.calculation.addendOne);

  const b = useSelector((state: any) => state.calculation.addendTwo);

  const start = useSelector((state: any) => state.result.start);

  const total = useSelector((state: any) => state.total.total);

  const [sum, setSum] = useState<number>(0);

  // Lưu phần trăm sai
  const [percentFalse, setPercentFalse] = useState<number>(0);

  const [time, setTime] = useState<string>("");

  // Thông báo lỗi sai
  const [notification, setNotification] = useState(false);
  const [isEnd, setEnd] = useState(false);

  const checkPercentFalse = (a: number, b: number) => {
    if (a > b) {
      // Nếu kết quả lớn hơn %
      setNotification(true);
    } else {
      setNotification(false);
    }
  };

  const logicCalculation = (c: number) => {
    numDot(removecommas(input));
    dispatch(saveInputValue(input));
    setSum(roundTo2(c));
    const savePercentage = (Math.abs(removecommas(input) - c) / c) * 100;
    setPercentFalse(roundTo2(savePercentage));
    checkPercentFalse(savePercentage, Number(percent));
  };

  const [lap, setLap] = useState<number[]>([]);

  const [duration, setDuration] = useState<number>(0);

  const Lap = () => {
    const lapNum = Date.now() - start;
    setDuration(Date.now() - start);
    setLap([...lap, lapNum]);
    setTime(msToHMS(lapNum));
    dispatch(saveDuration(lapNum));
    dispatch(saveStart(Date.now()));
  };
  const handleKeyDown = (event) => {
    if (
      (event.which >= 65 && event.which < 96) ||
      (event.which > 105 && event.which <= 255 && event.which != 190)
    ) {
      event.target.value = 0;
    }
    if (event.which >= 37 && event.which <= 40) return; // arrow
    if (event.which >= 48 && event.which <= 57)
      dispatch(setInput(event.target.value));
    if (event.keyCode === 13) {
      if (total.length <= 3) {
        Lap();
        if (s == "+") {
          const c = a + b;
          logicCalculation(c);
        }

        if (s == "-") {
          if (a < b) {
            const c = b - a;
            logicCalculation(c);
          } else {
            const c = a - b;
            logicCalculation(c);
          }
        }

        if (s == "×") {
          const c = a * b;
          logicCalculation(c);
        }

        if (s == "÷") {
          if (a < b) {
            const c = b / a;
            logicCalculation(c);
          } else {
            const c = a / b;
            logicCalculation(c);
          }
        }

        // Tất cả phép tính
        if (optionCalculation == 1) {
          if (s == "+") {
            const c = a + b;
            logicCalculation(c);
          }

          if (s == "-") {
            if (a < b) {
              const c = b - a;
              logicCalculation(c);
            } else {
              const c = a - b;
              logicCalculation(c);
            }
          }

          if (s == "×") {
            const c = a * b;
            logicCalculation(c);
          }

          if (s == "÷") {
            if (a < b) {
              const c = b / a;
              logicCalculation(c);
            } else {
              const c = a / b;
              logicCalculation(c);
            }
          }
        }
        // Phép tính cộng
        else if (optionCalculation == 2) {
          const c = a + b;
          logicCalculation(c);
        }
        // Phép tính trừ
        else if (optionCalculation == 3) {
          if (a < b) {
            const c = b - a;
            logicCalculation(c);
          } else {
            const c = a - b;
            logicCalculation(c);
          }
        }
        // Phép tính nhân
        else if (optionCalculation == 4) {
          const c = a * b;
          logicCalculation(c);
        }
        // Phép tính chia
        else {
          if (a < b) {
            const c = b / a;
            logicCalculation(c);
          } else {
            const c = a / b;
            logicCalculation(c);
          }
        }
        dispatch(randomCalculation());
      } else {
        Swal.fire({
          title: "Bạn có muốn lưu kết quả không?",
          showCancelButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            if (!localStorage.getItem("user")) {
              setShow(true);
            } else {
              const user = JSON.parse(localStorage.getItem("user"));
              const marginOfError = JSON.parse(
                localStorage.getItem("marginError")
              );
              UseAddRecord({
                userId: user.user._id,
                userName: user.user.email,
                duration: msToHMS(avgTime),
                error: marginOfError || 0,
                questionType: optionCalculation,
              });
              Swal.fire("Lưu kết quả thành công !!", "", "success");
            }
          }
        });
      }
    }
  };

  useEffect(() => {
    if (removecommas(input) != 0) {
      dispatch(
        saveTotal({
          calculator: Operations,
          inputValue: input,
          correctResult: sum,
          marginOfError: percentFalse,
          duration: duration,
          time: time,
        })
      );
      setInput("");
    }
  }, [sum]);

  //   useEffect(() => {
  //     if (calculation.length && notification != true) {
  //       ref.current.focus();
  //     }
  //   }, [calculation.length]);

  useEffect(() => {
    if (isEnd) {
    } else {
      setCalculation(calculationList);
    }
  }, [calculationList]);

  // Đóng thông báo sai
  const close = () => {
    setShowTotal(false);
  };
  // Đóng module
  const clodeModule = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="calculation-table min-h-[23em] h-auto">
        <table className="table-auto w-full text-center m-auto border-none">
          <thead>
            <tr>
              <th className="py-10" />
              <th className="">Operations</th>
              <th className="c3">Your Answer</th>
              <th>Correct Result</th>
              <th className="margin">Margin of Error</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {notification ? (
              showTotal ? (
                <tr>
                  <td colSpan={6}>
                    <div
                      className="flex justify-center items-center flex-col min-h-[23em] h-auto"
                      id="again"
                    >
                      <p className="text-xl mb-3">
                        You're out! Your margin of error is too high!
                      </p>
                      <div className="flex justify-center bg-yellow-400 h-10 w-36 rounded-lg">
                        <button
                          className="text-black font-bold"
                          onClick={() => close()}
                        >
                          Check Answers
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ) : (
                total &&
                total.map((item: any, index: number) => (
                  <tr key={index} className="relative">
                    <td className="px-2">{(index += 1)}</td>
                    <td className="w-80 px-2 py-2">
                      <p className="h-10 bg-[#F5F4F4] w-full rounded-xl pt-2">
                        {item}
                      </p>
                    </td>
                    <td className="w-48">
                      <input
                        type="text"
                        name="answer"
                        value={item.inputValue}
                        readOnly
                        className={
                          item.marginOfError > percent
                            ? "h-10 border border-red-500 w-full rounded-xl outline-none text-center"
                            : "h-10 border border-green-500 w-full rounded-xl outline-none text-center"
                        }
                      />
                    </td>
                    <td>{item.correctResult && numDot(item.correctResult)}</td>
                    <td>
                      {item.marginOfError && l100(roundTo2(item.marginOfError))}
                      %
                    </td>
                    <td>{item.duration && <div>{item.time}</div>}</td>
                  </tr>
                ))
              )
            ) : (
              total &&
              total.map((item: any, index: number) => (
                <tr key={index} className="relative">
                  <td className="px-2">{(index += 1)}</td>
                  <td className="w-80 px-2 py-2">
                    <p className="h-10 bg-[#F5F4F4] w-full rounded-xl pt-2">
                      {item}
                    </p>
                  </td>
                  <td className="w-48">
                    <input
                      type="text"
                      name="answer"
                      value={null}
                      onKeyUp={(event) => handleKeyDown(event)}
                      autoComplete="off"
                      ref={ref}
                      className={
                        "h-10 border border-yellow-500 w-full rounded-xl outline-none text-center"
                      }
                      onChange={(e) => handleChange(currencyMask(e))}
                    />
                  </td>
                  <td
                    className="absolute"
                    style={{ marginLeft: "48px", marginTop: "-40px" }}
                  >
                    {item.correctResult && numDot(item.correctResult)}
                  </td>
                  <td
                    className="absolute"
                    style={{ marginLeft: "250px", marginTop: "-40px" }}
                  >
                    {item.marginOfError && l100(roundTo2(item.marginOfError))}
                  </td>
                  <td
                    className="absolute"
                    style={{ marginLeft: "420px", marginTop: "-40px" }}
                  >
                    {item.time}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <hr className="py-4" />
      {/* Modal */}
      <div className={show ? "relative" : "relative hidden"}>
        <div
          id="popup-modal"
          className={
            "grid place-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full bg-gray-500/40"
          }
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto mx-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={() => clodeModule()}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Bạn chưa đăng nhập, bạn cần đăng nhập để lưu kết quả !
                </h3>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  <Link href={"/auth/login"}>Đăng nhập</Link>
                </button>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  <Link href={"/auth/register"}>Đăng ký</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCalculator;

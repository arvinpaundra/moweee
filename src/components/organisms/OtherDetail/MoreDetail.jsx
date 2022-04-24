import NumberFormat from 'react-number-format';

const MoreDetail = (props) => {
  const { status, release_date, original_language, budget, revenue } = props;

  const formatedDate = new Date(release_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <h5 className="text-lg font-semibold mb-2 w-fit">Other details</h5>
      <div className="px-4 py-5 w-full rounded-xl text-zwhite bg-zdarkblue text-sm">
        <table>
          <tbody className="flex flex-col md:gap-2.5 gap-1">
            <tr>
              <td className="w-36 font-medium">Status</td>
              <td className="font-light">{status}</td>
            </tr>
            <tr>
              <td className="w-36 font-medium">Released date</td>
              <td className="font-light">{formatedDate}</td>
              {/* <td className="font-light">October 30, 2018</td> */}
            </tr>
            <tr>
              <td className="w-36 font-medium">Languages</td>
              <td className="font-light">{original_language}</td>
            </tr>
            <tr>
              <td className="w-36 font-medium">Budget</td>
              <td className="font-light">
                {budget === 0 ? (
                  <p>N/A</p>
                ) : (
                  <NumberFormat displayType="text" prefix="$ " value={budget} thousandSeparator />
                )}
              </td>
            </tr>
            <tr>
              <td className="w-36 font-medium">Revenue</td>
              <td className="font-light">
                {revenue === 0 ? (
                  <p>N/A</p>
                ) : (
                  <NumberFormat displayType="text" prefix="$ " value={revenue} thousandSeparator />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MoreDetail;

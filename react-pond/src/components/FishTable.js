import FishTableRow from './FishTableRow.js';

var FishTable = () => (
  <table>
    <tbody>
      <FishTableRow />
      <FishTableRow />
      <FishTableRow />
    </tbody>
  </table>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

export default FishTable;

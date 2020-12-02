import AllPlacementsGrid from './AllPlacementsGrid';
import AllContainersGrid from './AllContainersGrid';
import GroupByContainerGrid from './GroupByContainerGrid';
import GroupByPlacementGrid from './GroupByPlacementGrid';
import GroupByAdUnitGrid from './GroupByAdUnitGrid';

export default function DataGridContainer(props) {
  const { group, placements, containers } = props;
  switch (group) {
    case 'allContainers':
      return (
        <div className="grid-container">
          <AllContainersGrid containers={containers} />
        </div>
      );

      case 'allPlacements':
      return (
        <div className="grid-container">
          <AllPlacementsGrid placements={placements} placementsAggregrated={ props.placementsAggregated } />
        </div>
      );

      case 'groupByContainer':
      return (
        <div className="grid-container">
          <GroupByContainerGrid containers={containers} />
        </div>
      );

      case 'groupByPlacement':
      return (
        <div className="grid-container">
          <GroupByPlacementGrid placements={placements} />
        </div>
      );

      case 'groupByAdUnit':
      return (
        <div className="grid-container">
          <GroupByAdUnitGrid placements={placements} />
        </div>
      );
  
    default:
      return (
        <div className="grid-container">
          <AllContainersGrid containers={containers} />
        </div>
      );
  }
}
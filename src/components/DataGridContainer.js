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
          <AllContainersGrid containers={containers} containersAggregated={ props.containersAggregated } startDate={ props.startDate } endDate={ props.endDate } />
        </div>
      );

      case 'allPlacements':
      return (
        <div className="grid-container">
          <AllPlacementsGrid placements={placements} placementsAggregated={ props.placementsAggregated } startDate={ props.startDate } endDate={ props.endDate } />
        </div>
      );

      case 'groupByContainer':
      return (
        <div className="grid-container">
          <GroupByContainerGrid containers={containers} startDate={ props.startDate } endDate={ props.endDate } />
        </div>
      );

      case 'groupByPlacement':
      return (
        <div className="grid-container">
          <GroupByPlacementGrid placements={placements} startDate={ props.startDate } endDate={ props.endDate } />
        </div>
      );

      case 'groupByAdUnit':
      return (
        <div className="grid-container">
          <GroupByAdUnitGrid placements={placements} startDate={ props.startDate } endDate={ props.endDate } />
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